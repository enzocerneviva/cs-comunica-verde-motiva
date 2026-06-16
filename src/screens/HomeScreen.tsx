import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { OcorrenciaCard } from '../components/OcorrenciaCard';
import { useOcorrencias } from '../context/OcorrenciasContext';
import { RootStackParamList } from '../navigation/AppNavigator';
import type { Ocorrencia } from '../types/ocorrencia';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#2E7D32',
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#fff',
    },
    subtitle: {
        fontSize: 15,
        color: '#E8F5E9',
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: -20,
        marginBottom: 12,
    },

    statCard: {
        backgroundColor: '#fff',
        flex: 1,
        marginHorizontal: 4,
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },

    statNumber: {
        fontSize: 22,
        fontWeight: '700',
    },

    statLabel: {
        color: '#666',
    }
});

export default function HomeScreen({ navigation }: Props) {
    const { ocorrencias } = useOcorrencias();

    const renderItem = ({ item }: { item: Ocorrencia }) => (
        <OcorrenciaCard
            item={item}
            onPress={() => navigation.navigate('Details', { id: item.id })}
        />
    );

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
                Nenhuma ocorrência registrada ainda.
            </Text>
            <Text style={styles.emptyText}>
                Crie uma nova para começar!
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Ocorrências</Text>
                <Text style={styles.subtitle}>
                    Total: {ocorrencias.length} registros
                </Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {ocorrencias.filter(o => o.risco === 'alto').length}
                    </Text>
                    <Text style={styles.statLabel}>Alto</Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {ocorrencias.filter(o => o.risco === 'medio').length}
                    </Text>
                    <Text style={styles.statLabel}>Médio</Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {ocorrencias.filter(o => o.risco === 'baixo').length}
                    </Text>
                    <Text style={styles.statLabel}>Baixo</Text>
                </View>
            </View>

            <FlatList
                data={ocorrencias}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={ListEmptyComponent}
            />

            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('New')}
                >
                    <Text style={styles.buttonText}>+ Nova Ocorrência</Text>
                </Pressable>
            </View>
        </View>
    );
}