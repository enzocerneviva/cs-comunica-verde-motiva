import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useOcorrencias } from '../context/OcorrenciasContext';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const RISCO_COLORS = {
    baixo: '#4CAF50',
    medio: '#FF9800',
    alto: '#F44336',
};

const STATUS_COLORS = {
    pendente: '#EF6C00',
    'em andamento': '#1976D2',
    resolvido: '#2E7D32',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F8',
    },

    content: {
        padding: 16,
    },

    header: {
        backgroundColor: '#2E7D32',
        padding: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    },

    section: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,

        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
    },

    value: {
        fontSize: 15,
        color: '#555',
        lineHeight: 22,
    },

    badge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },

    badgeText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 13,
    },

    comment: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        marginBottom: 8,
    },

    commentText: {
        color: '#555',
    },

    button: {
        marginTop: 8,
        backgroundColor: '#2E7D32',
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },

    emptyText: {
        color: '#888',
        fontStyle: 'italic',
    },
});

export default function OccurrenceDetailsScreen({
    route,
    navigation,
}: Props) {
    const { id } = route.params;
    const { ocorrencias } = useOcorrencias();

    const occ = ocorrencias.find((o) => o.id === id);

    if (!occ) {
        return (
            <View style={styles.content}>
                <Text>Ocorrência não encontrada.</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Detalhes da Ocorrência
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        📍 Local
                    </Text>
                    <Text style={styles.value}>
                        {occ.local}
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        📄 Descrição
                    </Text>
                    <Text style={styles.value}>
                        {occ.descricao}
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        ⚠️ Risco
                    </Text>

                    <View
                        style={[
                            styles.badge,
                            {
                                backgroundColor:
                                    RISCO_COLORS[occ.risco],
                            },
                        ]}
                    >
                        <Text style={styles.badgeText}>
                            {occ.risco.toUpperCase()}
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        📌 Status
                    </Text>

                    <View
                        style={[
                            styles.badge,
                            {
                                backgroundColor:
                                    STATUS_COLORS[occ.status],
                            },
                        ]}
                    >
                        <Text style={styles.badgeText}>
                            {occ.status.toUpperCase()}
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        📅 Data de Registro
                    </Text>

                    <Text style={styles.value}>
                        {new Date(occ.data).toLocaleString('pt-BR')}
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        💬 Comentários
                    </Text>

                    {occ.comentarios.length === 0 ? (
                        <Text style={styles.emptyText}>
                            Nenhum comentário registrado.
                        </Text>
                    ) : (
                        occ.comentarios.map((comentario, index) => (
                            <View
                                key={index}
                                style={styles.comment}
                            >
                                <Text style={styles.commentText}>
                                    {comentario}
                                </Text>
                            </View>
                        ))
                    )}
                </View>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>
                        Voltar
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}