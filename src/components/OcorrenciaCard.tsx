import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ocorrencia } from '../types/ocorrencia';

type OcorrenciaCardProps = {
    item: Ocorrencia;
    onPress?: () => void;
};

const RISCO_COLORS: Record<string, string> = {
    baixo: '#4CAF50',
    medio: '#FF9800',
    alto: '#F44336',
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        borderRadius: 8,
        overflow: 'hidden',
        borderLeftWidth: 4,
        backgroundColor: '#fff',
        padding: 12,
    },
    riscoBorder: {
        borderLeftColor: '#4CAF50',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    local: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        flex: 1,
    },
    riscoBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginLeft: 8,
    },
    riscoText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    descricao: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    data: {
        fontSize: 11,
        color: '#999',
    },
    status: {
        fontSize: 11,
        fontWeight: '500',
        color: '#666',
    },
});

export function OcorrenciaCard({ item, onPress }: OcorrenciaCardProps) {
    const riskColor = RISCO_COLORS[item.risco] || '#999';
    const dataFormatada = new Date(item.data).toLocaleDateString('pt-BR');
    const descricaoResumida = item.descricao.length > 80
        ? item.descricao.substring(0, 80) + '...'
        : item.descricao;

    return (
        <Pressable onPress={onPress}>
            <View
                style={[
                    styles.container,
                    { borderLeftColor: riskColor },
                ]}
            >
                {/* Linha 1: Local e Risco (badge) */}
                <View style={styles.header}>
                    <Text style={styles.local} numberOfLines={1}>
                        {item.local}
                    </Text>
                    <View style={[styles.riscoBadge, { backgroundColor: riskColor }]}>
                        <Text style={styles.riscoText}>
                            {item.risco.toUpperCase()}
                        </Text>
                    </View>
                </View>

                {/* Linha 2: Descrição (resumida) */}
                <Text style={styles.descricao} numberOfLines={2}>
                    {descricaoResumida}
                </Text>

                {/* Linha 3: Data e Status */}
                <View style={styles.footer}>
                    <Text style={styles.data}>{dataFormatada}</Text>
                    <Text style={styles.status}>
                        Status: {item.status}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}